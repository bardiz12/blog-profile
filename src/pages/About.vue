<template>
  <Layout>
    <Profile :linkbawah="true" :showdesc="true" :large="true" :socmed="true">
      <div id="about"></div>
      <div class="mt-5"></div>
      <h1 class="headline animated fadeInUp">
        <i class="fa fa-briefcase"></i> Education & Work Experience
      </h1>
      <v-timeline :dense="true" class="animated fadeInUp">
        <v-timeline-item :class="`animated fadeInLeft delay-1s`" v-for="(education, i) in educations" :key="i" color="grey lighten-2" small>
          <template v-slot:opposite>
            <span :class="`headline font-weight-bold`" v-text="education.year"></span>
          </template>
          <div class="py-4">
            <h2 :class="`headline font-weight-bold`">{{education.year}}</h2>
            <div v-html="education.text"></div>
          </div>
        </v-timeline-item>
      </v-timeline>

      <div class="mt-5"></div>
      <h1 class="headline animated fadeInUp">
        <i class="fa fa-star"></i> Achievement
      </h1>
      <v-timeline :dense="true" class="animated fadeInUp">
        <v-timeline-item
          v-for="(education, i) in achievements"
          :key="i"
          color="grey lighten-2"
          small
          class="animated fadeInLeft delay-1s"
        >
          <template v-slot:opposite>
            <span :class="`headline font-weight-bold`" v-text="education.year"></span>
          </template>
          <div class="py-4">
            <h2 :class="`headline font-weight-bold `">{{education.year}}</h2>
            <div v-html="education.text"></div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </Profile>
  </Layout>
</template>
    </Profile>
  </Layout>
</template>

<script>
import Profile from "@/components/Profile";
export default {
  data: () => ({
    achievements: [
      {
        year: "2017",
        text: `<ul style='margin-left:15px;'>
                  <li>2017 Unnes's PPA Scholarship recipients</li>
                  <li>1<sup>st</sup> Best Aplication in RIPTEK's PTI School Unnes</li>
                </ul>`
      },
      {
        year: "2018",
        text: `<ul style='margin-left:15px;'>
                  <li>Finalist of Mobile Applcation Competition at Institut Teknologi Bandung Cooperative Day 2018</li>
                  <li>Finalist of Capture The Flag Competition at JOINTS 2018 Universitas Gadjah Mada</li>
                  <li>2018 Unnes's PPA Scholarship recipients</li>
                </ul>`
      },
      {
        year: "2019",
        text: `<ul style='margin-left:15px;'>
                  <li>Finalist of Capture The Flag Competition at JOINTS 2019 Universitas Gadjah Mada</li>
                  <li>Finalist of Capture The Flag Competition at Arkavidia 5.0 Institut Teknologi Bandung</li>
                  <li>2019 Unnes's PPA Scholarship recipients</li>
                </ul>`
      }
    ],
    educations: [
      {
        year: "2013",
        text: "Start Study in SMA N 1 Rembang"
      },
      {
        year: "2015",
        text: "Chief of Information Technology Division in OSIS SMA N 1 Rembang"
      },
      {
        year: "2016",
        text:
          "<ul style='margin-left:15px;'><li>Graduated from SMA N 1 Rembang</li><li>Start Studying Computer Science in Semarang State University, Indonesia</li><li>Starting Freelance as Web Developer</li></ul>"
      },
      {
        year: "2017",
        text: `<ul style='margin-left:15px;'>
                  <li>Specialized Staff of Design & Animation Division of Screenshot Ilmu Komputer Unnes</li>
                  <li>Specialized Staff of Programming Division of I-Secret Ilmu Komputer Unnes</li>
                </ul>`
      },
      {
        year: "2018",
        text: `<ul style='margin-left:15px;'>
                  <li>Chief of Screenshot Hima Ilmu Komputer Unnes</li>
                  <li>Junior Web Programmer Intern in Inkubator Bisnis IKITAS Semarang</li>
                </ul>`
      }
    ]
  }),
  metaInfo: {
    title: "About me"
  },
  components: {
    Profile
  }
};
</script>
