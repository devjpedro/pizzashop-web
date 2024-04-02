import { api } from '@/lib/axios'

export type GetPopularProductsPropsResponse = {
  product: string
  amount: number
}[]

export async function getPopularProductsProps() {
  const response = await api.get<GetPopularProductsPropsResponse>(
    '/metrics/popular-products',
  )

  return response.data
}
