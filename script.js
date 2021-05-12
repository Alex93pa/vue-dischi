new  Vue ({
    el: "#app",
    data: {
        filteredData = []
    },
    methods: {
        onSelectChange(event) {
            const select = event.currentTarget
            select.value

            // this.filteredData = 
        }
    },
    mounted() {
        axios.get("https://flynn.boolean.careers/exercises/api/array/music")
        .then((resp) => {
            const albumsList = resp.data.response;

            
        })
    },
   
})