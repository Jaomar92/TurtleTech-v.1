"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const maxFileSize = 500000;
const ACCEPTED_IMAGE_TYPES = ["pdf"];

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  phone: z.string().refine((val) => /^01[0-46-9]-?[0-9]{7,8}$/.test(val), {
    message: "Please enter a valid Malaysian Phone Number",
  }),
  email: z.string().email({ message: "Invalid email address" }),
  pdf: z
    .object({
      file: z
        .any() // Use any() here as a workaround
        .refine((file) => file instanceof File, "Expected a single file") // Check for File instance
        .refine(
          (file) => file.type === "application/pdf",
          "Only PDF files are allowed"
        )
        .refine(
          (file) => file.size <= maxFileSize,
          "File size should be less than 1GB"
        ),
    })
    .optional(),
});

const Contact = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      pdf: { file: undefined },
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <div className="py-4 bg-gradient-to-r from-orange-400 from-5% via-red-500 via-50% to-orange-500 to-90% h-fit">
        <div className="container py-4">
          <div>
            <div className="text-4xl font-mono py-3">Contact</div>
            <div className="grid grid-cols-1 md:grid-cols-2 bg-neutral-200 shadow-md rounded-md h-fit place-content-stretch">
              <div className="w-full flex flex-col p-8 gap-3">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-3"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Name" {...field} />
                          </FormControl>
                          <FormDescription>
                            So we can get to know you.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Whatsapp Contact</FormLabel>
                          <FormControl>
                            <Input placeholder="017222222" {...field} />
                          </FormControl>
                          <FormDescription>
                            For us to reach out to you.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Jeff@TurtleTech.com"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Another Contact for us to reach out to you
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="pdf"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>PDF file of your project</FormLabel>
                          <FormControl>
                            <Input
                              placeholder=""
                              type="file"
                              onChange={(e) => {
                                // Update the form state with the selected file
                                const file = e.target.files
                                  ? e.target.files[0]
                                  : null;
                                field.onChange({ file: file });
                              }}
                              onBlur={field.onBlur}
                              name={field.name}
                              ref={field.ref}
                            />
                          </FormControl>
                          <FormDescription>
                            Your Project you wish us to deliver
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit">Submit</Button>
                  </form>
                </Form>
              </div>
              {/* <div className="mx-auto my-5 w-full h-[490px]  flex items-center justify-center "> */}
              <div
                className="mx-3 bg-slate-100 rounded-lg shadow-lg"
                style={{
                  backgroundImage: 'url("/Assets/Home/Contact.svg")',
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  display: "block",
                  // height: "200px",
                  width: "93%",
                }}
              ></div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
