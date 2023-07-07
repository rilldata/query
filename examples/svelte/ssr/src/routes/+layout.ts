import { browser } from '$app/environment'
import { QueryClient } from '@rilldata/svelte-query'
import type { LayoutLoad } from './$types'

export const load: LayoutLoad = async () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        enabled: browser,
        staleTime: 60 * 1000,
      },
    },
  })

  return { queryClient }
}
