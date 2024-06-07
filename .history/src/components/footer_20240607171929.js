import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLinkGroup,
} from "flowbite-react";

function Contact() {
  return (
    <Footer container>
      <div className="w-full text-center">
        <FooterDivider />
        <div className="w-full flex justify-center items-center">
          <FooterLinkGroup>
            <FooterIcon href="#" icon={BsFacebook} />
            <FooterIcon href="#" icon={BsInstagram} />
            <FooterIcon href="#" icon={BsTwitter} />
            <FooterIcon href="#" icon={BsGithub} />
            <FooterIcon href="#" icon={BsDribbble} />
          </FooterLinkGroup>
        </div>
        <FooterCopyright href="#" by="Flowbite™" year={2022} />
      </div>
    </Footer>
  );
}

export default Contact;
