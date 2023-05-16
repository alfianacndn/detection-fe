<template>
  <v-layout>
    <download-excel
      class="btn btn-default"
      :data="json_data"
      :fields="json_fields"
      worksheet="History1"
      name="Data-History.xls"
    >
      Download Excel (you can customize this with html code!)
    </download-excel>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      json_fields: {
        No: 'no',
        Date: 'date',
        Time: 'time',
        PIC : 'pic',
        Classification: 'classification',
        Accuration: 'accuration',
      },
      json_data: [
        {
          no: 1,
          date:'15/10/2922',
          time:'15:00',
          pic:'Diana Novita Sari',
          classification:'Good',
          accuration: '99.9%'
        },
      ],
      json_meta: [
        [
          {
            key: 'charset',
            value: 'utf-8',
          },
        ],
      ],
    }
  },
}
</script>
<style scoped lang="scss">
@function section-margin($margin) {
  @return $margin * 20;
}
.main-wrap {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.container-wrap {
  > section {
    position: relative;
  }
}
</style>