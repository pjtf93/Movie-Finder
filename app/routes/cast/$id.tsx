import type { LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import CastCredits from '~/components/CastCredits';
import CastDetails from '~/components/CastDetails';
import { getPersonById, getPersonCredits } from '~/services/people';

export const loader = async (args: LoaderArgs) => {
  const { params } = args;

  // Get the id
  const id = params.id;
  if (!id) {
    return json({ person: null, credits: null }, { status: 404 });
  }

  const person = await getPersonById(id);
  const credits = await getPersonCredits(id);

  return json({
    person: person,
    credits: credits,
  });
};

const CastPage = () => {
  const { person, credits } = useLoaderData<typeof loader>();

  return (
    <div className="text-white flex flex-col md:space-y-8 px-[5%]">
      <CastDetails {...person} />
      <CastCredits {...credits} />
    </div>
  );
};

export default CastPage;
