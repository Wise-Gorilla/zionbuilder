<template>
	<SortableContent
		class="zb-column"
		:element="element"
		:tag="htmlTag"
	>

		<template #start>
			<slot name="start" />
			<SvgMask
				v-if="topMask!==undefined && topMask.shape"
				:shapePath="topMask['shape']"
				:color="topMask['color']"
				:height="topMask['height']"
				:flip="topMask['flip']"
				position="top"
			/>

			<SvgMask
				v-if="bottomMask!==undefined && bottomMask.shape"
				:shapePath="bottomMask['shape']"
				:color="bottomMask['color']"
				:height="bottomMask['height']"
				:flip="bottomMask['flip']"
				position="bottom"
			/>
		</template>

		<template #end>
			<slot
				name="end"
			/>
		</template>
	</SortableContent>
</template>

<script>
export default {
	name: 'zion_column',
	props: ['options', 'api', 'element'],
	computed: {
		htmlTag () {
			return this.options.tag || 'div'
		},
		topMask () {
			return this.shapes['top']
		},
		bottomMask () {
			return this.shapes['bottom']
		},
		shapes () {
			return this.options.shapes || {}
		}
	}
}
</script>
