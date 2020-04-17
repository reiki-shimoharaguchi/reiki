<script>
import { Radar } from 'vue-chartjs';

export default {
  name: 'Chart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['R:HTML/G:JAVA/B:Linux', 'R:CSS/G:Ruby/B:Node', 'R:Javascript/G:RubyOnRails/B:Git', 'R:SCSS/G:MySQL/B:GitHub', 'R:Vue/G:Python/B:Firebase', 'R:jQuery/G:PHP/B:CircleCI'],
        datasets: [
          {
            label: 'Front-end',
            data: [2, 2, 2, 1, 2, 0],
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
            data: [3, 2, 1, 1, 6, 4],
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
            data: [1, 1, 2, 2, 1, 1],
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
            borderWidth: 1
          }
        ]
      },
    }
  },
  mounted () {
    this.renderChart(this.data)
  }
}
</script>
