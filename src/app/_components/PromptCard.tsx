import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type promptCard = {
  user: string;
  prompt: string;
  cardIndex: number
}

export const PromptCard = ({ user, prompt, cardIndex }: promptCard) => {
  return (
    <Card className={`w-fit h-fit border-serikaYellow text-serikaWhite bg-serikaGray ${cardIndex % 2 !== 0 ? 'ms-4' : 'ms-0'}`}>
      <CardHeader>
        <CardTitle>{user}</CardTitle>
      </CardHeader>
      <CardContent>
        {prompt}
      </CardContent>
    </Card>
  )
}