
<template >
    <button class="btn">
        <slot></slot>
    </button>
</template>
<script>
export default {
    
}
</script>
<style >
.btn {
    padding: 10px 40px;
    background: #3ba776;
    color: #fff;
    border: none;
    cursor: pointer;
    height: 50px;
    text-align: center;
}
    
</style>