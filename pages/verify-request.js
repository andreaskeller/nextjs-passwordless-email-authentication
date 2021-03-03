export default function VerifyRequest() {
  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      <div className="mt-8 mx-4 sm:mx-auto sm:w-full sm:max-w-lg">
        <div className="text-center mt-24">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Email Sent
          </h2>
        </div>
        <div className="mt-8 bg-white py-8 px-4 shadow-lg rounded-lg sm:px-10">
          <p className="font-medium mb-4 text-xl">
            Please check your inbox for your sign in link.
          </p>
          Sometimes this can land in SPAM! While we hope that isn't the case if
          it doesn't arrive in a minute or three, please check.
        </div>
      </div>
    </div>
  );
}
