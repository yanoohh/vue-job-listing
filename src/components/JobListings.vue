<script setup>
import jobData from '@/jobs.json'
import JobListing from './JobListing.vue';
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router'
import axios from 'axios';

defineProps({
    limit: {
        type: Number
    },
    showButton : {
        type: Boolean,
        default: false,
    }
})

const jobs = ref([]);

onMounted(async () => {
    try {
        const response = await axios.get('http://localhost:4000/jobs');
        jobs.value = response.data;
    } catch (error) {
        console.error("Error fetching jobs : " + error);
    }
});
</script>

<template>
 <!-- Browse Jobs -->
    <section class="bg-blue-50 px-4 py-10 snap-both snap-mandatory">
        <div class="container-xl m-auto md:container snap-start">
            <h2 class="text-3xl font-bold text-center text-green-500 mb-6">
                Browse Jobs
            </h2>
        </div>

        <!-- Job Listing 1 -->
         <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
            <JobListing v-for="(job, index) in jobs.slice(0,limit || jobs.length)" :key="index" :job="job" />
         </div>

         
    </section>

    <section class="m-auto max-w-lg my-10 px-6 transition-all hover:scale-105 ease-in-out " v-if="showButton">
        <RouterLink
            to="/jobs"
            class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
            >View All Jobs
        </RouterLink>
    </section>
    
</template>