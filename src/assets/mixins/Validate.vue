<script>
import { required, email, max, min, confirmed } from 'vee-validate/dist/vee-validate'
import { ValidationProvider, extend, ValidationObserver } from 'vee-validate'

extend('required', {
  ...required,
  message: '{_field_} 항목을 입력해 주세요.'
})
extend('required-select', {
  ...required,
  message: '{_field_} 항목을 선택해 주세요.'
})
extend('email', {
  ...email,
  message: '이메일 형식이 올바르지 않습니다.'
})
extend('max', {
  ...max,
  message: '{_field_} 항목을 {length}자 이하로 입력해 주세요.'
})
extend('min', {
  ...min,
  message: '{_field_} 항목을 {length}자 이상으로 입력해 주세요.'
})
extend('confirmed', {
  ...confirmed,
  message: '비밀번호가 맞지 않습니다'
})

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  }
}
</script>
