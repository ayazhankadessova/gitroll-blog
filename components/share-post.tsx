import { CopyIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

export function SharePost() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='secondary'>Share</Button>
      </PopoverTrigger>
      <PopoverContent align='end' className='w-[300px]'>
        <div className='flex flex-col space-y-2 text-left sm:text-left'>
          <h3 className='text-lg font-semibold'>Share this page</h3>
          <p className='text-sm text-muted-foreground'>
            Use the link below or directly share to twitter
          </p>
        </div>
        <div className='flex items-center space-x-2 pt-4'>
          <div className='grid flex-1 gap-2'>
            <Label htmlFor='link' className='sr-only'>
              Link
            </Label>
            <Input
              id='link'
              defaultValue='https://gitroll.io/blog'
              readOnly
              className='h-9'
            />
          </div>
          <Button type='submit' size='sm' className='px-3' variant='secondary'>
            <span className='sr-only'>Copy</span>
            <CopyIcon className='h-4 w-4' />
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
