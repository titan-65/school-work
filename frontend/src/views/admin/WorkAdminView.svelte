<script>
    // import { user } from '../../stores.js'
    // let date = new Date().getTime()
    import {onMount} from 'svelte'
    import axios from 'axios'

    let schoolWeekList = []

    onMount(async () => {
        try {
            let response = await axios.get('http://localhost:3000/api/v1/school-work')
            schoolWeekList = response.data
            console.log(schoolWeekList)
        } catch (error) {
            console.error(error)
        }
    })
</script>
<main>
    <div class=" h-full w-full absolute">
        
    </div>
</main>
