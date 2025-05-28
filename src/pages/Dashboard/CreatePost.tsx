import Button from "../../components/shared/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { postSchema } from "../../schema/post.schema";
import { zodResolver } from "@hookform/resolvers/zod";

type FormFields = z.infer<typeof postSchema>

export default function CreatePost() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: '',
      price: '',
      address: '',
      content: '',
      city: '',
      bedroom: '',
      bathroom: '',
      type: 'rent',
      property: 'apartment',
      utilities: 'owner',
    }
  });

  const onSubmit: SubmitHandler<FormFields> = data => {
    console.log(data)
  }
  return (
    <div>
      <h1 className="text-3xl py-7 text-center text-secondary-blue-600 font-bold">
        Create new post
      </h1>
      <form className="grid grid-cols-3 gap-10 my-3 mx-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-y-3 justify-center">
          <label htmlFor="title" className="text-secondary-blue-500 font-semibold">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="py-2 outline-none px-2 rounded-lg shadow-md"
            {...register('title', { required: true })}
          />
          {errors.title && <p className="text-red-500">{errors.title.message?.toString()}</p>}
        </div>
        <div className="flex flex-col gap-y-3 justify-center">
          <label htmlFor="price" className="text-secondary-blue-500 font-semibold">
            Price
          </label>
          <input
            type="text"
            id="price"
            className="py-2 outline-none px-2 rounded-lg shadow-md"
            {...register('price', { required: true })}
          />
          {errors.price && <p className="text-red-500">{errors.price.message?.toString()}</p>}
        </div>
        <div className="flex flex-col gap-y-3 justify-center">
          <label htmlFor="address" className="text-secondary-blue-500 font-semibold">
            Address
          </label>
          <input
            type="text"
            id="Address"
            className="py-2 outline-none px-2 rounded-lg shadow-md"
            {...register('address', { required: true })}
          />
          {errors.address && <p className="text-red-500">{errors.address.message?.toString()}</p>}
        </div>
        <div className="col-span-3 flex flex-col gap-y-3 justify-center">
          <label htmlFor="content" className="text-secondary-blue-500 font-semibold">
            Description
          </label>
          <textarea
            id="content"
            className="py-2 px-2 rounded-lg outline-none  min-h-[150px] resize-y shadow-md"
            {...register('content', { required: true })}
          ></textarea>
          {errors.content && <p className="text-red-500">{errors.content.message?.toString()}</p>}
        </div>
        <div className="flex flex-col gap-y-3 justify-center">
          <label htmlFor="city" className="text-secondary-blue-500 font-semibold">
            City
          </label>
          <input
            type="text"
            id="city"
            className="py-2 outline-none px-2 rounded-lg shadow-md"
            {...register('city', { required: true })}
          />
          {errors.city && <p className="text-red-500">{errors.city.message?.toString()}</p>}
        </div>
        <div className="flex flex-col gap-y-3 justify-center">
          <label htmlFor="bedroom" className="text-secondary-blue-500 font-semibold">
            Bedroom Number
          </label>
          <input
            type="text"
            id="bedroom"
            className="py-2 outline-none px-2 rounded-lg shadow-md"
            {...register('bedroom', { required: true })}
          />
          {errors.bedroom && <p className="text-red-500">{errors.bedroom.message?.toString()}</p>}
        </div>
        <div className="flex flex-col gap-y-3 justify-center">
          <label htmlFor="bathroom" className="text-secondary-blue-500 font-semibold">
            Bathroom Number
          </label>
          <input
            type="text"
            id="bathroom"
            className="py-2 outline-none px-2 rounded-lg shadow-md"
            {...register('bathroom', { required: true })}
          />
          {errors.bathroom && <p className="text-red-500">{errors.bathroom.message?.toString()}</p>}
        </div>
        <div className="flex flex-col gap-y-3 justify-center">
          <label htmlFor="type" className="text-secondary-blue-500 font-semibold">
            Type
          </label>
          <select
            id="type"
            className="py-2 outline-none px-2 rounded-lg shadow-md"
            {...register('type', { required: true })}
          >
            <option value="rent" defaultChecked>
              Rent
            </option>
            <option value="buy">Buy</option>
          </select>
          {errors.type && <p className="text-red-500">{errors.type.message?.toString()}</p>}
        </div>
        <div className="flex flex-col gap-y-3 justify-center">
          <label htmlFor="type" className="text-secondary-blue-500 font-semibold">
            Property
          </label>
          <select
            id="property"
            className="py-2 outline-none px-2 rounded-lg shadow-md"
            {...register('property', { required: true })}
          >
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
          {errors.property && <p className="text-red-500">{errors.property.message?.toString()}</p>}
        </div>
        <div className="flex flex-col gap-y-3 justify-center">
          <label htmlFor="utilities" className="text-secondary-blue-500 font-semibold">
            Utilities Policy
          </label>
          <select
            id="utilities"
            className="py-2 outline-none px-2 rounded-lg shadow-md"
            {...register('utilities', { required: true })}
          >
            <option value="owner">Owner is responsible</option>
            <option value="tenant">Tenant is responsible</option>
            <option value="shared">Shared</option>
          </select>
          {errors.utilities && <p className="text-red-500">{errors.utilities.message?.toString()}</p>}
        </div>
        <div className="flex flex-col gap-y-3 justify-center col-start-2">
          <Button styles="secondary-blue-600"> Create Post</Button>
        </div>
      </form>
    </div>
  )
}
