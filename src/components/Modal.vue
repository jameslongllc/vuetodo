<template>
    <div>
        <div class="btn btn-outline-dark app-button" @click="isOpen = true">Create Todo</div>

        <div class="modal" :class="{'is-active': isOpen}">
            <div class="modal-content">
                <span @click="isOpen = false
		" class="close">&times;</span>
                <p>Modal Window</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
	    return{
		    isOpen: false
	    }
    }
    }
</script>

<style lang="scss" scoped>
.app-button {
    font-size: 20px;
    padding: 10px;
    border-radius: 5px;
    // color: white;
    font-weight: bold;
    width: 100%;
}

.close {
    color: black;
    font-size: 28px;
    font-weight: bold;
    line-height: 8px;
    width: 30px;

    &:hover {
        cursor: pointer;
    }
}

.modal {
    display: none;
    position: fixed; // stay in place
    z-index: 9999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);

    &.is-active {
        display: block;
    }
}

.modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    text-align: center;
}
</style>