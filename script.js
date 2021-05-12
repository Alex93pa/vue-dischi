new  Vue ({
    el: "#app",
    data: {
        filteredData : [],
        albumsList : []
    },
    methods: {
        getGenereList() {
            const finalList = []

            albumsList.forEach((element) => {
                if(!finalList.includes(element.genre)) {
                    finalList.push(element.genre)
                }
            })

        },
        onSelectChange(event) {
            const select = event.currentTarget
            select.value

            // this.filteredData = 
        }
    },
    mounted() {
        axios.get("https://flynn.boolean.careers/exercises/api/array/music")
        .then((resp) => {
            this.albumsList = resp.data.response;
            // const albumsList = resp.data.response;
            // this.albumArrays.push(resp.data.response)
            // this.filteredData.push(resp.data.response.genere)

        })
    },
   
})