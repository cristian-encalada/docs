interface CurseForgeModData {
  id: number
  name: string
  slug: string
  downloadCount: number
}

interface CurseForgeApiResponse {
  data: CurseForgeModData
}

export async function fetchModDownloads(modId: number): Promise<number | null> {
  const apiKey = process.env.CURSEFORGE_API_KEY
  if (!apiKey) {
    console.warn('CURSEFORGE_API_KEY is not set — falling back to static download count')
    return null
  }

  try {
    console.log(`[CurseForge] Fetching mod ${modId}...`)
    console.log(`[CurseForge] API Key loaded: ${apiKey.length} chars, starts with: ${apiKey.substring(0, 10)}...`)
    const response = await fetch(`https://api.curseforge.com/v1/mods/${modId}`, {
      headers: {
        'x-api-key': apiKey,
        'User-Agent': 'LucidNav-Portfolio/1.0',
        'Accept': 'application/json',
      },
      next: { revalidate: 3600 },
    })
    if (!response.ok) {
      const errorBody = await response.text()
      console.error(`CurseForge API error: ${response.status} ${response.statusText}`)
      console.error(`Response body: ${errorBody}`)
      return null
    }
    const json: CurseForgeApiResponse = await response.json()
    return json.data.downloadCount
  } catch (error) {
    console.error('Error fetching CurseForge mod downloads:', error)
    return null
  }
}
