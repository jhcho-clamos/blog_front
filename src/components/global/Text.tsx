interface TextProps {
  placeholder: string;
  style: {
    [name: string]: string;
  };
}
const Text = (props: TextProps) => {
  return (
    <input {...props.style} type="input" placeholder={props.placeholder} />
  );
};
export default Text;
