import { List, ListItem, Text, Button } from "./ContactList.styled";

const ContactList = ({ data, deliteContact }) => {
  return (
    <List>
      {data.map((contact) => (
        <ListItem key={contact.id}>
          <Text>
            {contact.name}: {contact.number}
          </Text>
          <Button type="Button" onClick={() => deliteContact(contact.id)}>
            Delite
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
