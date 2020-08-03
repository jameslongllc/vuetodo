<template>
    <div>
        <div class="btn btn-outline-dark app-button" @click="isOpen = true">Create Todo</div>

        <div class="modal" :class="{'is-active': isOpen}">
            <div class="modal-content">
                <span @click="close" class="close">&times;</span>
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
        };
    },
    watch: {
        close(isClose, prevIsClose) {
            if (isClose && this.isOpen) {
                this.isOpen = false;
            }
        },
    },
    methods: {
        close() {
            this.isOpen = false;
        },
    },
};
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

.app-form {
    .label {
        display: block;
        font-size: 18px;
        font-weight: bold;
    }
    .form-input {
        padding: 10px;
        font-size: 17px;
        width: 100%;
    }
    .form-control {
        margin-bottom: 10px;
        height: auto;
        border: none;
        text-align: left;
    }
    .app-button {
        width: 30%;
    }
}
.close {
    color: black;
    font-size: 28px;
    font-weight: bold;
    line-height: 8px;
    width: 30px;
    margin-left: auto;
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
    width: 400px;
    text-align: center;
}
</style>