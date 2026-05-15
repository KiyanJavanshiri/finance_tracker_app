import InnerContainer from "@/layout/InnerContainer";

export const Footer = () => {
  const now = new Date().getFullYear();

  return (
    <footer className="mt-4 text-center">
      <InnerContainer>
        <div>
          <p className="text-gray-600 font-normal leading-normal text-sm">
            All rights reserved. {now}
          </p>
        </div>
      </InnerContainer>
    </footer>
  );
};
