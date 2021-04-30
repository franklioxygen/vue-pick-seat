<template>
  <div :class="[seat.occupied ? 'occupied' : '' , 'seat']" @click="$emit('toggle-availability', seat.seatNum)">{{ seat.seatNum }}</div>
</template>

<script>
export default {
    name: 'seat',
    props: ['seat'],
}
</script>

<style>
.seat {
    border-radius: 50px;
    border: 3px solid #73AD21;
    width: 50px;
    height: 50px;
    margin: 10px;
    float: left;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.occupied {
    background-color:olivedrab;
}
</style>