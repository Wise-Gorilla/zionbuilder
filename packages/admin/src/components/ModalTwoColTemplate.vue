<template>
	<div class="znpb-admin-modal-two-cols">
		<div class="znpb-admin-modal-two-cols__title-block">
			<h4 class="znpb-admin-modal-title-block__title">{{title}}</h4>
			<p class="znpb-admin-modal-title-block__desc">{{desc}}</p>
		</div>
		<div class="znpb-admin-modal-two-cols__option-block">
			<slot></slot>
		</div>
	</div>
</template>
<script>
export default {
	name: 'ModalTwoColTemplate',
	props: {
		title: {
			type: String,
			required: false
		},
		desc: {
			type: String,
			required: false
		}
	},
	data () {
		return {}
	}
}
</script>
<style lang="scss">
.znpb-admin-modal-two-cols {
	display: flex;
	align-items: center;
	padding: 30px 30px;
	border-bottom: 1px solid $surface-variant;

	&__title-block {
		flex-basis: 40%;
		flex-shrink: 0;
		padding-right: 28px;
	}

	&__option-block {
		flex-basis: 60%;
	}

	&:last-child {
		border-bottom: none;
	}

	.znpb-admin-modal-title-block__title {
		margin-bottom: 10px;
		font-family: $font-stack;
		font-size: 14px;
		font-weight: 500;
		line-height: 1;
	}

	.znpb-admin-modal-title-block__desc {
		margin-bottom: 0;
		color: $surface-headings-color;
		font-family: $font-stack;
		font-size: 12px;
		font-weight: 500;
	}
}
</style>
