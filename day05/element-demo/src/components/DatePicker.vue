<template>
	<div id="datapicker">
		<el-date-picker
	      v-model="value"
	      type="date"
	      placeholder="选择日期"
	      :picker-options="options"
	      size="small"
	      format="yyyy年MM月dd日">
	    </el-date-picker>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				value:'',
				options:{
					firstDayOfWeek:1,
					disabledDate(time) {
			          return time.getTime() < Date.now() - 8.64e7;
			        }
				}
			}
		}
	}

</script>