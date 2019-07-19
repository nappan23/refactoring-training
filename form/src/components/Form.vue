<template>
  <div class="container">
    <form novalidate id="js-form" method="post">
      <div class="field">
        <label class="label">名前</label>
        <div class="control">
          <input type="text" name="name" required @input="toggleDanger" v-bind:class="{ input: true, 'is-danger': isDanger }">
          <p class="help is-danger">名前を入力してください</p>
        </div>
      </div>

      <div class="field">
        <label class="label">年齢</label>
        <div class="control">
          <input class="input" type="number" min="0" max="130" name="age" required>
          <p class="help is-danger">年齢を入力してください</p>
        </div>
      </div>

      <div class="field">
        <label class="label">性別</label>
        <div class="control">
          <label class="radio">
            <input type="radio" name="gender" value="男性" checked>
            男性
          </label>
          <label class="radio">
            <input type="radio" name="gender" value="女性">
            女性
          </label>
        </div>
      </div>

      <div class="field">
        <label class="label">職業</label>
        <div class="control">
          <div class="select">
            <select name="job" id="js-job">
              <option>会社員</option>
              <option>自営業</option>
              <option>公務員</option>
              <option>学生</option>
              <option>その他</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field field-option" id="js-job-name">
        <label class="label">職業名</label>
        <div class="control">
          <input class="input" type="text" name="job-name">
          <p class="help is-danger">職業名を入力してください</p>
        </div>
      </div>

      <div class="field">
        <label class="label">お問い合わせ内容</label>
        <div class="control">
          <textarea class="textarea" name="body" required></textarea>
          <p class="help is-danger">お問い合わせ内容を入力してください</p>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <label class="checkbox">
            規約に同意する <input type="checkbox" name="agreement" required>
            <p class="help is-danger">規約に同意してください</p>
          </label>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <button type="submit" class="button is-link">送信</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'form',
  data: function() {
    return {
      isDanger: false
    }
  },
  methods: {
    toggleDanger: function (e) {
      let target = e.currentTarget
      if (target.required && !target.value) {
        this.isDanger = true
      } else {
        this.isDanger = false
      }
    }
  },
}
</script>
<style scoped>
  input + .help, textarea + .help {
    display: none;
  }
  input.is-danger + .help, textarea.is-danger + .help {
    display: block;
  }

  .field-option {
    display: none;
  }
  .field-option.is-open {
    display: block;
  }
</style>
