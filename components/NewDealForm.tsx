import { zodResolver } from "@hookform/resolvers/zod"
import { set, useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useLocalStorage } from "@/lib/localStorage"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { toast } from "sonner"
import { DialogClose } from "./ui/dialog"




export default function NewDealForm() {
  const [newDeals, setNewDeals] = useLocalStorage<Deal[]>("deals", [])
  const formSchema = z.object({

    object: z.string().min(2, {
      message: "Object should be at least 2 characters long",
    }),
    company: z.string().min(1, {
      message: "Company should be at least 1 characters long",
    }),
    companyLogo: z.string().url({
      message: "Put a valid URL for the company logo",
    }),
    status: z.enum(['', ...Array.from(new Set(newDeals.map(deal => deal.status)))], {
      message: "Invalid status",
    }),
    amount: z.string({
      message: "Invalid value",
    }),
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      object: "Website redesign",
      company: "Spikes",
      companyLogo: "https://www.spikes-challenges.fr/_next/image?url=%2Fspikes_logo.png&w=32&q=75",
      status: "Pending",
      amount: "5.000 $USD",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    const newDeal: Deal = {
      id: newDeals.length + 1,
      checked: false,
      date: new Date().toLocaleDateString(),
      ...values,
      companyIcon: values.companyLogo,
    }
    console.log(newDeal)
    toast("No database connected, but the deal is concluded, thanks !")
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="object"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Object</FormLabel>
              <FormControl>
                <Input placeholder="UX/UI Design" {...field} />
              </FormControl>
              <FormDescription>
                This is the object of the deal
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name</FormLabel>
              <FormControl>
                <Input placeholder="Behance" {...field} />
              </FormControl>
              <FormDescription>
                This is the name of the company
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="companyLogo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Logo URL</FormLabel>
              <div className="flex items-center">
              <Avatar className="absolute ml-2 h-6 w-6">
                <AvatarImage src={field.value} />
                <AvatarFallback>SP</AvatarFallback>
              </Avatar>
              <FormControl>
                <Input className="pl-12" placeholder="https://img.png" {...field} />
              </FormControl>
              </div>
              <FormDescription>
                This is the url of company logo
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange}>
                  <SelectTrigger className="w-[180px]" defaultValue={form.getValues().status}>
                    <SelectValue placeholder="Choose a status" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from(new Set(newDeals.map(deal => deal.status))).map((status) => (
                      <SelectItem key={status} value={status}>
                        {status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>
                This is the status of the deal
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <Input placeholder="300" {...field} />
              </FormControl>
              <FormDescription>
                This is the amount of the deal
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <DialogClose>
        <Button type="submit">Add</Button>
        </DialogClose>
      </form>
    </Form>

  )
}