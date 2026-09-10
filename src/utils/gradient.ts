import { Platform, ViewStyle } from 'react-native'

type GradientDirection = 'to bottom' | 'to bottom right'

export function linearGradientStyle(
  colors: string[],
  options?: {
    locations?: number[]
    direction?: GradientDirection
  }
): ViewStyle {
  const direction = options?.direction ?? 'to bottom'
  const stops = colors
    .map((color, index) => {
      const location = options?.locations?.[index]
      if (location != null) {
        return `${color} ${Math.round(location * 100)}%`
      }
      return color
    })
    .join(', ')
  const gradient = `linear-gradient(${direction}, ${stops})`

  if (Platform.OS === 'web') {
    return { backgroundImage: gradient } as ViewStyle
  }

  return { experimental_backgroundImage: gradient } as ViewStyle
}
