import { useState } from "react";
import { useToast } from "@/components/Ui/use-toast";
import { Form, FormField, FormLabel, FormControl, FormMessage } from "@/components/Ui/form";
import { Input } from "@/components/Ui/input";
import { Checkbox } from "@/components/Ui/Checkbox";
import { Button } from "@/components/Ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import * as z from "zod";
 import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
 } from "@/components/Ui/select";
 import { zodResolver } from "@hookform/resolvers/zod"
 import { Textarea } from "@/components/Ui/textarea";
 import { PiCheckLight, PiSmiley } from "react-icons/pi";
 import {
   FormDescription,
   FormItem, 
 } from "@/components/Ui/form";


export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  async function onSubmit(data) {
    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      setSubmitted(true);
    } catch (error) {
      toast({ title: "Error", description: "Something went wrong" });
    } finally {
      setLoading(false);
    }
  }

  const FormSchema = z.object({
    first_name: z.string(),
    last_name: z.string(),
    email: z.string().email(),
    job_title: z.string(),
    company_name: z.string(),
    help: z.enum(["Evaluate Your Social Expert for my company", "Learn More", "Get a Quote", "Other"]),
    services: z.enum([
      "Social Media Marketing",
      "Social Media Management",
      "Content Creation",
      "Graphic Design",
      "Web Development and Management",
    ]),
    info: z.string(),
    terms: z.boolean(),
  });

  return (
    <div className="w-full h-screen bg-black antialiased">
      <Header />
      <div className="md:flex items-center justify-center md:py-20 px-6">
        <div className="text-5xl font-medium w-full md:w-2/3 pb-5 md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Contact Brandwebify
        </div>
        <div className="py-4 text-gray-300">
          Let's talk about how Brandwebify can help your team work better.
        </div>
        <div className="bg-[#f6f5f4] md:w-4/5 space-y-6 p-4 rounded-2xl my-4 hidden md:flex md:flex-col">
          <div className="flex gap-4 border-b">
            <div className="font-normal pb-4">
              One flexible agency for your entire company to share knowledge, ship projects,
              and collaborate.
            </div>
          </div>
          <div className="flex gap-4 border-b">
            <div className="font-normal pb-4">
              Enterprise features to securely manage user access and security.
            </div>
          </div>
          <div className="flex gap-4">
            <div className="font-normal pb-4">
              Dedicated support to work with you on your setup and help you build the best plan
              for your company.
            </div>
          </div>
        </div>
      </div>
      <Form onSubmit={onSubmit}>
        {!submitted ? (
          <form className="space-y-4 h-full border rounded-3xl p-10 md:w-1/3">
            <div className="md:flex items-center gap-6">
              <FormField control={undefined} name="first_name">
                <FormItem>
                  <FormLabel>First name *</FormLabel>
                  <FormControl>
                    <Input />
                  </FormControl>
                </FormItem>
              </FormField>
              
              <FormField control={undefined} name="last_name">
                <FormItem>
                  <FormLabel>Last name *</FormLabel>
                  <FormControl>
                    <Input />
                  </FormControl>
                </FormItem>
              </FormField>
            </div>
            <FormField control={undefined} name="email">
              <FormItem>
                <FormLabel>Email *</FormLabel>
                <FormControl>
                  <Input />
                </FormControl>
              </FormItem>
            </FormField>
            <FormField control={undefined} name="company_name">
              <FormItem>
                <FormLabel>Company name?</FormLabel>
                <FormControl>
                  <Input />
                </FormControl>
              </FormItem>
            </FormField>
            <FormField control={undefined} name="services">
              <FormItem>
                <FormLabel>Services you are interested in</FormLabel>
                <Select defaultValue={undefined} placeholder="Select an option">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Social Media Marketing">Social Media Marketing</SelectItem>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="App Development">App Development</SelectItem>
                    <SelectItem value="Content Creation">Content Creation</SelectItem>
                    <SelectItem value="Graphic Design">Graphic Design</SelectItem>
                    <SelectItem value="SEO Optimization">SEO Optimization</SelectItem>
                    <SelectItem value="Brand Strategy and Consultation">
                      Brand Strategy and Consultation
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            </FormField>
            <FormField control={undefined} name="help">
              <FormItem>
                <FormLabel>How can we help ?</FormLabel>
                <Select defaultValue={undefined} placeholder="Select an option">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Evaluate Your Social Expert for my company">
                      Evaluate Brandwebify for my company
                    </SelectItem>
                    <SelectItem value="Learn More">Learn More</SelectItem>
                    <SelectItem value="Get a Quote">Get a Quote</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            </FormField>
            <FormField control={undefined} name="info">
              <FormItem>
                <FormLabel>Anything else ?</FormLabel>
                <FormControl>
                  <Textarea style={{ height: "100px" }} />
                </FormControl>
              </FormItem>
            </FormField>
            <div className="flex gap-4 items-center">
              <Checkbox />
              <div>
                I agree to Brandwebify's sending marketing communications related to Your
                Brandwebify
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button type="submit" disabled={loading}>
                Submit
              </Button>
            </div>
          </form>
        ) : (
          <>
            <div className="text-xl md:text-2xl flex items-center justify-center flex-col px-8">
              <div className="w-80 py-20">
                <PiSmiley className="text-6xl text-white mx-auto" />
                <div className="text-white font-light text-center justify-center mx-auto py-10">
                  We've received your inquiry and will be contacting you via email shortly.
                </div>
              </div>
            </div>
          </>
        )}
      </Form>
      <Footer />
    </div>
  );
}






// "use client";

// import { useState } from "react";

// import { zodResolver } from "@hookform/resolvers/zod";

// import { useForm } from "react-hook-form";

// import * as z from "zod";

// import { Checkbox } from "@/components/Ui/Checkbox";

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/Ui/select";

// import { Button } from "@/components/Ui/button";

// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/Ui/form";

// import { Input } from "@/components/Ui/input";

// import { useToast } from "@/components/Ui/use-toast";

// import { Textarea } from "@/components/Ui/textarea";
// import { PiCheckLight, PiSmiley } from "react-icons/pi";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer"

// const FormSchema = z.object({
//   first_name: z.string(),
//   last_name: z.string(),
//   email: z.string().email(),
//   job_title: z.string(),
//   company_name: z.string(),
//   help: z.enum([
//     "Evaluate Your Social Expert for my company","Learn More","Get a Quote","Other",
//   ]),
//   services: z.enum([
//     "Social Media Marketing", "Social Media Management","Content Creation","Graphic Design","Web Development and Management",
//   ]),
//   info: z.string(),
// });

// type FormValues = {
//   first_name: string;
//   last_name: string;
//   email: string;
//   job_title: string;
//   company_name: string;
//   help: "Evaluate Your Social Expert for my company" | "Learn More" | "Get a Quote" | "Other";
//   services:
//   |"Social Media Marketing"|"Social Media Management"|"Content Creation"|"Graphic Design"|"Web Development and Management";
//   info: string;
//   terms: boolean;
// };

// export default function Contact() {
//   const [loading, setLoading] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const { toast } = useToast();

//   const form = useForm<FormValues>({
//     resolver: zodResolver(FormSchema),
//     defaultValues: {
//       first_name: "",
//       last_name: "",
//       email: "",
//       job_title: "",
//       company_name: "",
//       help: "Learn More",
//       services: "Social Media Marketing",
//       info: "",
//     },
//   });

//   async function onSubmit(data: z.infer<typeof FormSchema>) {
//     try {
//       setLoading(true);
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       });

//       if (!res.ok) {
//         throw new Error("Something went wrong");
//       }

//       setSubmitted(true);
//     } catch (error) {
//       toast({
//         title: "Error",
//         description: "Something went wrong",
//       });
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div className=" w-full  h-screen md:items-center md:justify-center bg-dak /[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden ">
//        <Header />
//       <div className="md:flex items-start justify-center md:py-20 px-6">
//         <div className="">
//           <div className="text-5xl font-medium  w-full md:w-2/3  pb-5 md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
//             Contact Brandwebify
//           </div>
//           <div
//             className="
              
//               py-4
//               text-gray-300
//                     "
//           >
//             Let&apos;s talk about how Brandwebify can help your team work better.
//           </div>

//           <div className="bg-[#f6f5f4] md:w-4/5 space-y-6 p-4 rounded-2xl my-4 hidden md:flex md:flex-col">
//             <div className="flex gap-4 border-b ">
//               <div className=" font-normal pb-4 ">
//                 One flexible agency for your entire company to share knowledge,
//                 ship projects, and collaborate.
//               </div>
//             </div>

//             <div className="flex gap-4 border-b ">
//               <div className=" font-normal pb-4 ">
//                 Enterprise features to securely manage user access and security.
//               </div>
//             </div>

//             <div className="flex gap-4  ">
//               <div className=" font-normal pb-4 ">
//                 Dedicated support to work with you on your setup and help you
//                 build the best plan for your company.
//               </div>
//             </div>
//           </div>
//         </div>

//         <Form {...form}>
//           {!submitted ? (
//             <form
//               onSubmit={form.handleSubmit(onSubmit)}
//               className="
//             space-y-4
//             h-full
//             border rounded-3xl p-10
//             md:w-1/3 "
//             >
//               <div className="md:flex items-center gap-6 ">
//                 <FormField
//                   control={form.control}
//                   name="first_name"
//                   render={({ field }) => (
//                     <FormItem className="items-center justify-center  w-full">
//                       <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
//                         First name *
//                       </FormLabel>
//                       <FormControl>
//                         <Input {...field} />
//                       </FormControl>
//                     </FormItem>
//                   )}
//                 />

//                 <FormField
//                   control={form.control}
//                   name="last_name"
//                   render={({ field }) => (
//                     <FormItem className="items-center justify-center  w-full">
//                       <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
//                         Last name *
//                       </FormLabel>
//                       <FormControl>
//                         <Input {...field} />
//                       </FormControl>
//                     </FormItem>
//                   )}
//                 />
//               </div>

//               <FormField
//                 control={form.control}
//                 name="email"
//                 render={({ field }) => (
//                   <FormItem className="items-center justify-center  w-full">
//                     <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
//                       Email *
//                     </FormLabel>
//                     <FormControl>
//                       <Input {...field} />
//                     </FormControl>
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="company_name"
//                 render={({ field }) => (
//                   <FormItem className="items-center justify-center  w-full">
//                     <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
//                       Company name?
//                     </FormLabel>
//                     <FormControl>
//                       <Input {...field} />
//                     </FormControl>
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="services"
//                 render={({ field }) => (
//                   <FormItem className="items-center justify-center w-full">
//                     <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
//                     Services you are interested in
//                     </FormLabel>
//                     <Select
//                       onValueChange={field.onChange}
//                       defaultValue={field.value}
//                     >
//                       <FormControl>
//                         <SelectTrigger>
//                           <SelectValue placeholder="Select an option" />
//                         </SelectTrigger>
//                       </FormControl>
//                       <SelectContent>
//                         <div className="flex gap-4">
//                           <SelectItem value="Social Media Marketing">
                          
//                         </SelectItem>
//                         </div>
                        
//                         <SelectItem value="Social Media Marketing">Social Media Marketing</SelectItem>
//                         <SelectItem value="Web Development">Web Development</SelectItem>
//                         <SelectItem value="App Development">App Development</SelectItem>
//                         <SelectItem value="Content Creation">Content creation</SelectItem>
//                         <SelectItem value="Graphic Design">Graphic Design</SelectItem>
//                         <SelectItem value="SEO Optimization">SEO Optimisation </SelectItem>
//                         <SelectItem value="Brand Strategy and Consultation">Brand Strategy and Consultation </SelectItem>

//                       </SelectContent>
//                     </Select>
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="help"
//                 render={({ field }) => (
//                   <FormItem className="items-center justify-center  w-full">
//                     <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
//                       How can we help ?
//                     </FormLabel>
//                     <Select
//                       onValueChange={field.onChange}
//                       defaultValue={field.value}
//                     >
//                       <FormControl>
//                         <SelectTrigger
// >
//                           <SelectValue placeholder="Select an option" />
//                         </SelectTrigger>
//                       </FormControl>
//                       <SelectContent>
//                         <div className="flex gap-4">
//                           <SelectItem value="Evaluate Your Social Expert for my company">
//                             Evaluate Brandwebify for my company
//                           </SelectItem>
//                         </div>
//                         <SelectItem value="Learn More">Learn More</SelectItem>
//                         <SelectItem value="Get a Quote">Get a Quote</SelectItem>

//                         <SelectItem value="Other">Other</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="info"
//                 render={({ field }) => (
//                   <FormItem className="items-center justify-center w-full">
//                     <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
//                       Anything else ?
//                     </FormLabel>
//                     <FormControl>
//                       <Textarea style={{ height: "100px" }} {...field} />
//                     </FormControl>
//                   </FormItem>
//                 )}
//               />

//               <div className="flex gap-4 items-center">
//                 <div>
//                   <Checkbox
//                     className="
//                 outline
//                 border-2
//                 text-sm
//                 font-light
//                 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400
//                 "
//                   />
//                 </div>
//                 <div className="text-xs font-light  md:w-3/4 mb-1 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
//                   I agree to Brandwebify&apos; sending marketing communications related
//                   to Your Brandwebify
//                 </div>
//               </div>

//               <div className="flex items-center gap-4">
//                 <Button
//                   type="submit"
//                   className="
//                             text-sm
//                             font-light"
//                   disabled={loading}
//                   onClick={() => form.handleSubmit(onSubmit)}
//                 >
//                   Submit
//                 </Button>
//               </div>
//             </form>
//           ) : (
//             <>
//               <div
//                 className="
//         text-xl 
//         md:text-2xl 
//         flex 
//         items-center
//         justify-center
//         flex-col
//         px-8
//         ">
//                 <div className="w-80 py-20">
//                   <PiSmiley className="text-6xl text-white mx-auto" />

//                   <div className="text-white font-light  text-center justify-center mx-auto py-10">
//                     We&apos;ve received your inquiry and will be contacting you
//                     via email shortly.
//                   </div>
//                 </div>
//               </div>
//             </>
//           )}
//         </Form>
//       </div>
//       <Footer/>  
//     </div>
//   );
// }