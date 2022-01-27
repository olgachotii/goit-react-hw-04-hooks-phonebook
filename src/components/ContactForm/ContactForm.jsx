import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Form, Button } from './ContactForm.styled';

function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // const handlChengeName = (e) => {
  //   setName(e.target.value);
  // };

  // const handlChengeNumber = (e) => {
  //   setNumber(e.target.value);
  // };

  const handlChenge = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = createContact(name, number);
    onSubmit(newContact);
    setName('');
    setNumber('');
  };

  const createContact = (name, number) => {
    return { id: nanoid(4), name, number };
  };

  const nameId = nanoid(4);
  const numberId = nanoid(4);

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor={nameId}>Name </label>
      <input
        type="text"
        name="name"
        id={nameId}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={name}
        onChange={handlChenge}
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <label htmlFor={numberId}>Number </label>
      <input
        type="tel"
        name="number"
        id={numberId}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        value={number}
        onChange={handlChenge}
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <Button type="submit">Add contact</Button>
    </Form>
  );
}

// class oldContactForm extends Component {
//   state = {
//     name: "",
//     number: "",
//   };

//   nameId = nanoid(4);
//   numberId = nanoid(4);

//   handlChenge = (e) => {
//     const { name, value } = e.currentTarget;
//     this.setState({
//       [name]: value,
//     });
//   };

//   createContact = (name, number) => {
//     return { id: nanoid(4), name, number };
//   };

//   handleSubmit = (e) => {
//     const { name, number } = this.state;

//     e.preventDefault();
//     const newContact = this.createContact(name, number);
//     this.props.onSubmit(newContact);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: "", number: "" });
//   };

//   render() {
//     const { name, number } = this.state;

//     return (
//       <Form onSubmit={this.handleSubmit}>
//         <label htmlFor={this.nameId}>Name </label>
//         <input
//           type="text"
//           name="name"
//           id={this.nameId}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           value={name}
//           onChange={this.handlChenge}
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />

//         <label htmlFor={this.numberId}>Number </label>
//         <input
//           type="tel"
//           name="number"
//           id={this.numberId}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           value={number}
//           onChange={this.handlChenge}
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />

//         <Button type="submit">Add contact</Button>
//       </Form>
//     );
//   }
// }

export default ContactForm;
