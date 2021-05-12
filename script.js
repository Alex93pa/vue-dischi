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
        selectGenre(event) {
            const select = event.currentTarget
            select.value

            // this.filteredData = 
        },
        orderDate: function() {
            this.items.sort((a, b) => {
                if (Date.parse(a.year) > Date.parse(b.year)) {
                   return 1
                } else if (Date.parse(a.year) < Date.parse(b.year)) {
                   return -1
                } else {
                   return 0
                }
              })
            // return this.item.sort((a, b) => new Date(a.year) - new Date(b.year) );
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