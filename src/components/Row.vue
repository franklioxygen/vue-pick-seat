<template>
    <div class="seatRow" >
        <Seat :key="index" v-for="(seat, index) in row" :seat="seat" @toggle-availability="$emit('toggle-availability', seat.seatNum)"/>
    </div>
</template>

<script>
import Seat from './Seat';
export default {
    name: 'Row',
    components: {
        Seat,
    },
    props: ['row'],
    emits: ['toggle-availability'],
}
</script>

<style>
.seatRow {
    background-color: beige;
    margin: 3px;
    overflow: hidden;
    width: fit-content;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>