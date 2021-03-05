<script>
    // import { user } from '../../stores.js'
    // let date = new Date().getTime()
    import CardDetails from '../../components/features/admin/CardDetails.svelte'
    import {onMount} from 'svelte'
    import axios from 'axios'

    let schoolWeekList = []

    onMount(async () => {
        try {
            let response = await axios.get('http://localhost:3000/api/v1/school-work')
            schoolWeekList = response.data.data.schoolWorks
            console.log(schoolWeekList)
        } catch (error) {
            console.error(error)
        }
    })
</script>
<main>
    <div class=" h-full w-full absolute">
        <section class="section">
            <div class="container">
                <table>
                    <thead>
                        <tr>
                            <th>Week of</th>
                            <th>Published</th>
                        </tr> 
                    </thead>
                    {#each schoolWeekList as schooWeek}
                         <!-- content here -->
                    {/each}
                </table>
            </div>
        </section>
    </div>
</main>
