import Button from "../../components/shared/Button";

export default function CreatePost() {
  return (
    <div>
      <h1 className="text-3xl py-7 text-center text-secondary-blue-600 font-bold">
        Create new post
      </h1>
      <form className="grid grid-cols-3 gap-10 mt-3 mx-4">
        <div className="flex flex-col gap-y-3 justify-center">
          <label htmlFor="title" className="text-secondary-blue-500 font-semibold">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="py-2 outline-none px-2 rounded-lg shadow-xl"
            required
          />
        </div>
        <div className="flex flex-col gap-y-3 justify-center">
          <label htmlFor="price" className="text-secondary-blue-500 font-semibold">
            Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            className="py-2 outline-none px-2 rounded-lg shadow-xl"
            required
          />
        </div>
        <div className="flex flex-col gap-y-3 justify-center">
          <label htmlFor="address" className="text-secondary-blue-500 font-semibold">
            Address
          </label>
          <input
            type="text"
            id="Address"
            name="Address"
            className="py-2 outline-none px-2 rounded-lg shadow-xl"
            required
          />
        </div>
        <div className="col-span-3 flex flex-col gap-y-3 justify-center">
          <label htmlFor="content" className="text-secondary-blue-500 font-semibold">
            Description
          </label>
          <textarea
            id="content"
            name="content"
            className="py-2 px-2 rounded-lg outline-none  min-h-[150px] resize-y shadow-xl"
            required
          ></textarea>
        </div>
        <div className="flex flex-col gap-y-3 justify-center">
          <label htmlFor="city" className="text-secondary-blue-500 font-semibold">
            City
          </label>
          <input
            type="text"
            id="Address"
            name="Address"
            className="py-2 outline-none px-2 rounded-lg shadow-xl"
            required
          />
        </div>
        <div className="flex flex-col gap-y-3 justify-center">
          <label htmlFor="bedroom" className="text-secondary-blue-500 font-semibold">
            Bedroom Number
          </label>
          <input
            type="text"
            id="bedroom"
            name="bedroom"
            className="py-2 outline-none px-2 rounded-lg shadow-xl"
            required
          />
        </div>
        <div className="flex flex-col gap-y-3 justify-center">
          <label htmlFor="bathroom" className="text-secondary-blue-500 font-semibold">
            Bathroom Number
          </label>
          <input
            type="text"
            id="bathroom"
            name="bathroom"
            className="py-2 outline-none px-2 rounded-lg shadow-xl"
            required
          />
        </div>
        <div className="flex flex-col gap-y-3 justify-center">
          <label htmlFor="type" className="text-secondary-blue-500 font-semibold">
            Type
          </label>
          <select name="type" className="py-2 outline-none px-2 rounded-lg shadow-xl">
            <option value="rent" defaultChecked>
              Rent
            </option>
            <option value="buy">Buy</option>
          </select>
        </div>
        <div className="flex flex-col gap-y-3 justify-center">
          <label htmlFor="type" className="text-secondary-blue-500 font-semibold">
            Property
          </label>
          <select name="property" className="py-2 outline-none px-2 rounded-lg shadow-xl">
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="flex flex-col gap-y-3 justify-center">
          <label htmlFor="utilities" className="text-secondary-blue-500 font-semibold">
            Utilities Policy
          </label>
          <select name="utilities" className="py-2 outline-none px-2 rounded-lg shadow-xl">
            <option value="owner">Owner is responsible</option>
            <option value="tenant">Tenant is responsible</option>
            <option value="shared">Shared</option>
          </select>
        </div>
        <div className="flex flex-col gap-y-3 justify-center col-start-2">
          <Button styles="secondary-blue-600"> Create Post</Button>
        </div>
      </form>
    </div>
  )
}
