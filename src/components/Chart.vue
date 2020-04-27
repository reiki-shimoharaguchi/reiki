<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'Chart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: [],
        datasets: [
          {
            label: 'Front-end',
            data: [],
            backgroundColor: [
              'rgba(255, 0, 0, 0.2)',
              'rgba(0, 0, 0, 0.2)',
              'rgba(0, 0, 0, 0.2)',
              'rgba(0, 0, 0, 0.2)',
              'rgba(0, 0, 0, 0.2)',
              'rgba(0, 0, 0, 0.2)'
            ],
            borderColor: [
              'rgba(255, 0, 0, 1)',
              'rgba(255, 0, 0, 1)',
              'rgba(255, 0, 0, 1)',
              'rgba(255, 0, 0, 1)',
              'rgba(255, 0, 0, 1)',
              'rgba(255, 0, 0, 1)'
            ],
            borderWidth: 1
          },
          {
            label: 'Back-end',
            data: [],
            backgroundColor: [
              'rgba(0, 255, 0, 0.2)',
              'rgba(0, 0, 0, 0.2)',
              'rgba(0, 0, 0, 0.2)',
              'rgba(0, 0, 0, 0.2)',
              'rgba(0, 0, 0, 0.2)',
              'rgba(0, 0, 0, 0.2)'
            ],
            borderColor: [
              'rgba(0, 255, 0,  1)',
              'rgba(0, 255, 0,  1)',
              'rgba(0, 255, 0,  1)',
              'rgba(0, 255, 0,  1)',
              'rgba(0, 255, 0,  1)',
              'rgba(0, 255, 0,  1)'
            ],
            borderWidth: 1
          },
          {
            label: 'DevOps',
            data: [],
            backgroundColor: [
              'rgba(0, 0, 255, 0.2)',
              'rgba(0, 0, 0, 0.2)',
              'rgba(0, 0, 0, 0.2)',
              'rgba(0, 0, 0, 0.2)',
              'rgba(0, 0, 0, 0.2)',
              'rgba(0, 0, 0, 0.2)'
            ],
            borderColor: [
              'rgba(0, 0, 255,  1)',
              'rgba(0, 0, 255,  1)',
              'rgba(0, 0, 255,  1)',
              'rgba(0, 0, 255,  1)',
              'rgba(0, 0, 255,  1)',
              'rgba(0, 0, 255,  1)'
            ],
            borderWidth: 1,
          }
        ]
      },
      options: {
        animation: false,
        legend: {
          labels: {
            fontSize: 20
          }
        },
        scale: {
          pointLabels: {
            fontSize: 20
          },
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 10,
            stepSize: 1,
            fontSize: 16
          }
        }
      }
    }
  },
  mounted () {
    this.getChartName()
    this.renderChart(this.data, this.options)
  },
  methods:{
    getChartName(){
      for (  var i = 0;  i < 3;  i++  ) {
        const names = this.$store.getters.skillName
        this.data.labels = names
        const scores = this.$store.getters.skillScore(i)
        this.data.datasets[i].data = scores
      }
    }
  }
  // computed: {
  //   users : function(){
  //     return this.$store.state.users
  //   }
  // },
  // mounted () {
  //   this.renderChart(this.data);
  //   this.$store.dispatch('getUsers')
  // }
}
</script>
