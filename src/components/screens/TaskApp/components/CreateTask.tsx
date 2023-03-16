import TextInput from 'src/components/common/TextInput'
import TextArea from 'src/components/common/TextArea'

export default function CreateTask() {
  return (
    <section className="bg-slate-700 rounded p-4">
      <h2 className="font-bold mb-2">Add a Task</h2>
      <form action="">
        <TextInput
          name="title"
          label="Title"
          placeholder="Aprendiendo React"
          />
        <TextArea
          name="body"
          label="Body"
          placeholder="Con Boris Sempai" />
      </form>
    </section>
  )
}
