
export default function CreatePost() {
  return (
    <div>
      <h1 className="text-2xl mt-4 text-center text-secondary-blue-600 font-bold">Create new post</h1>
      <form className="grid grid-cols-3 gap-4 mt-3 mx-4">
        <div className="flex flex-col gap-y-3 justify-center">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className="py-2 outline-none px-2 rounded-lg"
            required
          />
        </div>
        <div className="flex flex-col gap-y-3 justify-center">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            name="price"
            className="py-2 outline-none px-2 rounded-lg"
            required
          />
        </div>
        <div className="flex flex-col gap-y-3 justify-center">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="Address"
            name="Address"
            className="py-2 outline-none px-2 rounded-lg"
            required
          />
        </div>
        <div className="col-span-3 flex flex-col gap-y-3 justify-center">
          <label htmlFor="content">Description</label>
          <textarea
            id="content"
            name="content"
            className="py-2 px-2 rounded-lg outline-none  min-h-[150px] resize-y"
            required
          ></textarea>
        </div>
        <div className="flex flex-col gap-y-3 justify-center">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="Address"
            name="Address"
            className="py-2 outline-none px-2 rounded-lg"
            required
          />
        </div>
        <div className="flex flex-col gap-y-3 justify-center">
          <label htmlFor="bedroom">Bedroom Number</label>
          <input
            type="text"
            id="bedroom"
            name="bedroom"
            className="py-2 outline-none px-2 rounded-lg"
            required
          />
        </div>
        <div className="flex flex-col gap-y-3 justify-center">
          <label htmlFor="bathroom">Bathroom Number</label>
          <input
            type="text"
            id="bathroom"
            name="bathroom"
            className="py-2 outline-none px-2 rounded-lg"
            required
          />
        </div>
      </form>
    </div>
  )
}
