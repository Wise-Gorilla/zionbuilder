<template>
	<div class="znpb-admin-gradient-preset-box__empty">
		<Icon icon="plus" />
		<div>{{$translate('add_gradient')}}</div>
	</div>
</template>
<script>
export default {
	name: 'AddGradient'
}

</script>
<style lang="scss" scoped>
.znpb-admin-gradient-preset-box__empty {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 28px 0;
	color: $font-color;
	font-weight: 500;
	border: 2px dashed lighten($font-color, 25%);
	border-radius: 3px;
	cursor: pointer;
	.znpb-editor-icon-wrapper {
		width: 16px;
		height: 16px;
		margin-bottom: 5px;
	}
}
</style>
