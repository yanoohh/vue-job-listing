<script setup>
defineProps({
    bg: {
        type: String,
        default: "bg-slate-200"
    }
})
</script>

<template>
     <div :class="`${bg} p-6 rounded-lg shadow-md`">
        <slot></slot>
     </div>
</template>