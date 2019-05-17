<template>
    <div>
        <!-- 顶部滑动条 -->
        <div id="slider" class="mui-slider">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<!-- 类绑定 -->
					<a :class="['mui-control-item',item.ting_uid === 0 ? 'mui-active' : '']" 
					v-for="item in cates" :key="item.ting_uid" @click="getPhotoListByTinguid()">
						{{item.artist_name}}
					</a>
					
				</div>
			</div>
		</div>
		<!-- 图片懒加载 -->
		<ul class="photo-list">
			<li v-for="item in list" :key="item.ting_uid">
				<img v-lazy="item.pic_s500">
				<div class="info">
					<h1 class="info-title">
						{{item.title}}
					</h1>
					<div class="info-body">
						{{item.si_proxycompany}}
					</div>
				</div>
			</li>
			
		</ul>
    </div>
</template>

<script>
import mui from '../../lib/js/mui.min.js'


export default {
	created () {
		this.getAllCategory();
		this.getPhotoListByTinguid();
	},
    mounted(){
		mui('.mui-scroll-wrapper').scroll({
			deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
		});
	},
	data () {
		return {
			cates: [],
			list: []
		}
	},
	methods: {
		//获取标题
		getAllCategory () {
			this.axios.get("https://api.apiopen.top/musicRankingsDetails?type=1")
				.then( result => {
					console.log(result.data)
					if (result.data.code === 200) {
						result.data.result.unshift({artist_name:'全部',ting_uid:0});
						this.cates = result.data.result;
					}
				})
		},
		// 获取对应图片
		getPhotoListByTinguid () {
			this.axios.get("https://api.apiopen.top/musicRankingsDetails?type=1")
				.then( result => {
					if (result.data.code === 200) {
						this.list = result.data.result;
					}
				})
		}

	}
}
</script>

<style lang="scss" scoped>
	* { touch-action: pan-y; } 

	.photo-list{
		list-style: none;
		margin: 0;
		padding: 10px;
		padding-bottom: 0;
		li{
			background-color: #ccc;
			box-shadow: 0 0 9px gray;
			text-align: center;
			margin-bottom: 10px;
			position: relative;
			img{
				width: 100%;
				vertical-align: middle;
			}
			//  图片样式
			img[lazy=loading] {
			width: 40px;
			height: 300px;
			margin: auto;
			}
			.info{
				color: white;
				text-align: center;
				position: absolute;
				bottom: 0;
				background: rgba(0,0,0,0.4);
				.info-title{
					font-size:14px;
				}
				.info-body{
					font-size: 15px;
				}
			}
		}
		
	}

	
</style>
