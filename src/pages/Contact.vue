<template>
  <MainApp>
    <v-row>
      <v-col md="8" lg="8" offset-lg="2" offset-md="2" sm="12" xs="12">
        <h1 class="mb-5">Contact Me</h1>
        <v-form
          v-if="!formSubmited"
          ref="form"
          name="contact"
          method="post"
          v-on:submit.prevent="sendMessage"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:
              <input name="bot-field" />
            </label>
          </p>
          <h4 class>Personal Info</h4>
          <v-text-field
            v-model="formData.name"
            :counter="100"
            :rules="nameRules"
            name="name"
            label="Name"
            required
          ></v-text-field>

          <v-text-field
            v-model="formData.email"
            :counter="100"
            :rules="emailRules"
            name="email"
            label="Email"
            required
          ></v-text-field>
          <h4 class="mt-5">Message</h4>
          <v-text-field
            v-model="formData.subject"
            :counter="100"
            name="subject"
            :rules="subjectRules"
            label="Subject"
            required
          ></v-text-field>
          <v-textarea
            v-model="formData.message"
            :counter="1000"
            :rules="messageRules"
            name="message"
            label="Body"
            required
          ></v-textarea>
          <v-btn color="primary" class="mr-4" type="submit">Send Message</v-btn>

          <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>
        </v-form>
        <v-alert
          v-else
          type="success"
        >Thank you for sending me a message!, i will read your message soon.</v-alert>
      </v-col>
    </v-row>
  </MainApp>
</template>

<script>
import MainApp from "@/components/MainApp";
export default {
  data: () => {
    return {
      formSubmited: false,
      formData: {
        subject: "",
        email: "",
        message: "",
        name: ""
      },
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 100) || "Name must be less than 100 characters"
      ],
      subjectRules: [
        v => !!v || "Subject is required",
        v => (v && v.length >= 10) || "Subject minimum 10 characters"
      ],
      messageRules: [
        v => !!v || "Message is required",
        v => (v && v.length >= 10) || "Message must be 10 or more characters"
      ],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  methods: {
    reset() {
      this.$refs.form.reset();
    },
    encode(data) {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    sendMessage(e) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData
        })
      })
        .then(() => {
          this.formSubmited = true;
        })
        .catch(error => alert(error));
    }
  },
  metaInfo: {
    title: "Contact"
  },
  components: {
    MainApp
  }
};
</script>
