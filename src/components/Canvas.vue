<template>
<div>
    <h1>Seat Selection</h1>
    <Row :key="index" v-for="(row, index) in rows" :row="row" @toggle-availability="toggleAvailability"/>
</div>

</template>

<script>
import Row from './Row';
export default {
    name: 'Canvas',
    components: {
        Row,
    },
    computed:{
        rows: function() {
            let i,j,chunk = 5;
            let rows = [];
            for (i=0,j=this.seats.length; i<j; i+=chunk) {
                rows.push(this.seats.slice(i,i+chunk));
            }
            return rows;
        }

    },
    methods: {
        toggleAvailability(seatNumber) {
            this.seats[seatNumber-1].occupied = !this.seats[seatNumber-1].occupied;
        },
    },
    data() {
        return {
            seats: [
                {seatNum: 1, occupied: false},
                {seatNum: 2, occupied: true},
                {seatNum: 3, occupied: true},
                {seatNum: 4, occupied: false},
                {seatNum: 5, occupied: false},
                {seatNum: 6, occupied: false},
                {seatNum: 7, occupied: true},
                {seatNum: 8, occupied: false},
                {seatNum: 9, occupied: false},
                {seatNum: 10, occupied: true},
                {seatNum: 11, occupied: false},
                {seatNum: 12, occupied: false},
                {seatNum: 13, occupied: false},
                {seatNum: 14, occupied: false},
                {seatNum: 15, occupied: true},
                {seatNum: 16, occupied: false},
                {seatNum: 17, occupied: false},
                {seatNum: 18, occupied: false},
                {seatNum: 19, occupied: true},
                {seatNum: 20, occupied: false},

            ]

        }
    },

};
</script>

<style scoped>
h1 {
    text-align: center;
    margin: 30px 0 80px 0;
}
</style>