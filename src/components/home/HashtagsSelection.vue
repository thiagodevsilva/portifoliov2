<template>
  <div id="hashtagSelection">
    <a v-for="(tag, index) in dataTags" :key="index">
        <div v-if="tag != ''" class="tagsTools" :title="'Prejetos ' + tag[0].descricao">
            <img :src="`/images/tools/${tag[0].imagem}`" class="animatedImage" :alt="tag[0].descricao">
            <span>{{ tag[0].descricao }}</span>
        </div>
    </a>
  </div>
</template>

<script>
    import { db } from '../../services/firebase.js';
    import { collection, getDocs, query, where /*orderBy, onSnapshot*/ } from 'firebase/firestore';

    export default {
        name: 'hashtagSelection',
        data() {
            return {        
                tags: [],
                dataTags: []

            };
        },
        async created() {
            let allTags = [];
            const projectsRef = await collection(db, 'projetos');            
            const snapshot = await getDocs(projectsRef);
            
            snapshot.docs.forEach(doc => {
                const data = doc.data();
                if (data.hashtags) {
                    allTags = allTags.concat(data.hashtags);
                }
            });
            this.tags = [...new Set(allTags)]; // Removendo duplicatas            

            let promises = this.tags.map(dado => this.getTagData(dado));
            let dataTags = await Promise.all(promises);
            this.dataTags = dataTags;
            // console.log(this.dataTags);

        },
        methods:{
            async getTagData(nome){
                const projectsRef = collection(db, "tools-info");
                const q = query(projectsRef, where("tag", "==", nome));
                const querySnapshot = await getDocs(q);
                return querySnapshot.docs.map((doc) => doc.data());
            },

            toolsImages(tool){
            let src = `/images/tools/${tool}`;
               return src;
            }
        }
    }
</script>

<style>
#hashtagSelection {
    display: flex;
}

.tagsTools {
    background-color: #FFF;
    padding: 20px;
    margin: 13px;
    border-radius: 6px;
    width: 200px;
    word-wrap: break-word;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    text-decoration: none;
    color: #000;

}
.tagsTools img {
    max-width: 60px;
}
.tagsTools span {
    width: auto;
    text-align: center;
}

/*
* Animação hover das tags
*/
@keyframes hover3d {
  0% {
    transform: translateX(0) scale(1) rotateY(0deg);
  }
  50% {
    transform: translateX(-10px) scale(1.1) rotateY(0deg);
  }
  100% {
    transform: translateX(0) scale(1) rotateY(360deg);
  }
}

.tagsTools:hover .animatedImage {
  animation: hover3d 1.6s ease-in-out;
}

</style>