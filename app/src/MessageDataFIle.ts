import { readFile } from 'node:fs/promises'
import { MessageData } from './MessageDta'

export class MessageDataFile implements MessageData {
  async read(language: string): Promise<string> {
    const message = await readFile(`./message/${language}.txt`, 'utf8')

    return message
  }
}
