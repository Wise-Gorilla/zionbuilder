import { find } from 'lodash-es'
import { ref, Ref, computed } from 'vue'
import { ElementType } from './models'

const zionElements = window.ZnPbInitalData.elements_data.map(config => {
	return new ElementType(config)
})

// Add content Wrapper
zionElements.push(new ElementType({
	element_type: 'contentRoot',
	wrapper: true
}))

const elementTypes: Ref = ref(zionElements)

export function useElementTypes() {
	const addElementType = (config) => {
		elementTypes.value.push(new ElementType(config))
	}

	const getVisibleElements = computed(() => {
		return elementTypes.value.filter((element) => {
			return element.show_in_ui
		})
	})

	const getElementType = (elementType: string) => {
		return find(elementTypes.value, {element_type: elementType})
	}

	const registerElementComponent = (config) => {
		const { elementType, component } = config
		const element = getElementType(elementType)

		if (!element) {
			console.warn(`element with ${elementType} could not be found.`)
			return
		}

		element.registerComponent(component)
	}

	function resetElementComponents() {
		elementTypes.value.forEach(elementType => {
			elementType.resetComponent()
		})
	}

	return {
		elementTypes,
		getVisibleElements,
		addElementType,
		getElementType,
		registerElementComponent,
		resetElementComponents
	}
}