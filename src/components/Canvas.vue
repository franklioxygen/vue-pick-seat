<template>
<div>
    <h1>Seat Selection</h1>
    <h3>Username: {{ $store.state.userName }}</h3> 
    <h3>Your Seats:</h3>
    <h4 @click="logout">logout</h4>
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
        async toggleAvailability(seatNumber) {
            const res = await fetch(`api/seats/${seatNumber}`, {
                method: 'PUT',
                headers: {
                'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    'occupied': !this.seats[seatNumber-1].occupied
                })
            });
            if(res.status === 200) this.seats[seatNumber-1].occupied = !this.seats[seatNumber-1].occupied;
        },
        async fetchSeats() {
            const res = await fetch('api/seats');
            const data = await res.json();
            return data;
        },
        logout(){
            this.$store.commit('logout');
            this.$router.push('/login');
        },
    },
    data() {
        return {
            seats: []
        }
    },
    async created() {
        this.seats = await this.fetchSeats();
    },
};
</script>

<style scoped>
h1 {
    text-align: center;
    margin: 30px 0 80px 0;
}
h3 {
    text-align: center;
}
h4 {
    text-align: center;
}
</style>