type Props = {
    rate: number
}

export const EmojiRanting = ({ rate }: Props) => {
    if (rate > 5) rate = 5;
    if (rate < 0) rate = 0;

    const rateInt = Math.floor(rate);
    const emojis = ['😢', '😔', '😒', '🤨', '🙂', '😀']
    const stars = `${emojis[rateInt]}`.repeat(rateInt) + '😕'.repeat(5 - rateInt);


    const fulltime = new Intl.DateTimeFormat('pt-BR', {
        timeStyle: 'short',
        hour12: false
      }). format();
    
    return (
        <div>
            {fulltime}
            <div className="flex items-center text-6xl">
                <div className="bg-gray-700 p-2 rounded">{rate.toFixed(1)}</div>
                <div className="ml-3">{stars}</div>
            </div>
        </div>
    );
}