new  Vue ({
    el: "#app",
    data: {
        filteredData : [],
        albumsList : [],
        genreList : [],
        genreToFilter : ""
    },
    methods: {
        onSelectChange() {
            if(this.genreToFilter === "") {
                this.filteredData = [...this.albumsList]                
                return
            }

            const newFilteredData = this.albumsList.filter((album) => {
                return album.genre === this.genreToFilter
            })

            this.filteredData = newFilteredData

        },
        createGenresOptions() {

            this.albumsList.forEach((album) => {
                if(!this.genreList.includes(album.genre)) {
                    this.genreList.push(album.genre);

                }
            })
        },
        // orderDate() {
        //     this.items.sort((a, b) => {
        //         if (Date.parse(a.year) > Date.parse(b.year)) {
        //            return 1
        //         } else if (Date.parse(a.year) < Date.parse(b.year)) {
        //            return -1
        //         } else {
        //            return 0
        //         }
        //       })
        //     // return this.item.sort((a, b) => new Date(a.year) - new Date(b.year) );
        // }
    },
    mounted() {
        
        axios.get("https://flynn.boolean.careers/exercises/api/array/music")
        .then((resp) => {
            this.albumsList = resp.data.response;

            // this.albumsList.push(...incomingAlbumsList);
            // this.filteredData.push(...incomingAlbumsList);


            this.createGenresOptions();
        })

    },
   
})