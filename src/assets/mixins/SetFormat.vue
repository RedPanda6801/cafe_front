<script>
import dayjs from 'dayjs'

export default {
  methods: {
    setDateFormat(value) {
      const result = dayjs(value).format('YYYY.MM.DD HH:mm:ss')
      return result
    },
    setCalDate(value) {
      const result = dayjs(value).fromNow()
      return result
    }
  }
}
</script>
