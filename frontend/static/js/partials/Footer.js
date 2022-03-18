const styles = {};

const Footer = () => {
  return `
    <footer class="w-full grid grid-cols-2-1 bg-gray-100 py-12 px-24">
        <h2 class="font-bold">Nos réseaux</h2>
        <h2 class="font-bold">Newsletter</h2>
        <div class="flex space-between gap-4 flex-column mt-10">
            <a class="hover:scale-110 transition-transform" href="https://www.facebook.com" title="Facebook">
                <img class="h-12" src="https://lh3.googleusercontent.com/OCAtbo6-P3r1CJdCMYEVlWFOwvVvcwExIP1nQsi-50jm3SWVm2IBvP1K9DY8CQxMCsM410IreBWQUZn46me_Tqx8cx1q_ZUQdU9zUKAtEfF10b7gNNT_RobIhF-USaNG9HJMNRM_j5Fmr--tr6vwC3iC8ayxPYu2wDK8X7he8EZw0M0svXBZgLaQqOxDmcME8Q0KI89zb3cpBKht3sxb6SfxObB9RtEl7oLxeGkXivrIxbRFXzzKBVr63deOdGPO1V2Ecsf1SX6pBslFktPBCvOi1nIJI257uL2j-Ba44fT_PAWwDptuEpYsr5YbN02nSz_EjXjniykTN6RI1uPZtCunS15B5RSXWY3eYa_5tDBYihDtyESxDBvD4XWPnIpMYYPBB_V0rWTp04l3cVxDjq_TimZ66xXyhnWw7bicroKUxuvujKvo57Lo6QGwg5wvYP4u523XPll0U3Ub2OvV491riXmo_fL-MnPMtfzFA8f81F5BBimpTjlDn2Od0tpuXcdTENH8nAziU5UC1mL5chQmxIeX3pwtlM54E-ki6KYwAtNARZoLPspCFGYjmi0f4LCzVAKL8Tt8ZQpILN1ihRnimeGL78wopT3rwsn-veLNwAnJGISaAuzgTjWoFkArH7CcBIalavFOiVhqVqsjQkGr_NF5pEfoD2TPoX0lwuM0cEXRRefbsMl_wk4GIbF8lvKdRfjomSg2RK3dH-YynOA-60rnBT447fqdnf1zMuMO15aXvmZ5uAtnA5pM=s256-no?authuser=0"
                alt="facebook logo">
            </a>
            <a class="hover:scale-110 transition-transform" href="https://www.instagram.com" title="Instagram">
                <img class="h-12" src="https://lh3.googleusercontent.com/yzttuxcl1SiQ-wUWaMm_kNMMWnGSYbEU5JhIOVPNNR5I2ssWBU_9gyu0kMO9GAd6N27Mz2taBKwPSiRrxLfG9N8Wa9h46iVfcMmozHJonmiNuMQauJn1WqIrT9uIrA8jtQZodinFxOgzq9BTJbQmbnLm0lqKweAfFa7w0S9f39FojkJQJ_HAkWDiyr_6UMR5XNL8gR7bilJKI2exHJEKSAQZUUx15fD9L_XBJYftbwo5eZhLTturJzR3YksrX_kE_WDSuC4pxMCyGgL0MiUGkFv3CThY7clRSNq70P3kNVYvNqrAoOXvojQRJvXG3nl7wzs9Yc5sDqsZzeYKAkwK9cLaoR3WS7c3VbBDIcqLABN5YsM-92BZRYiHCJpYPjgaUZapv-RDMKMI6EakZCEpPEd3tDCNWN3JotMlwQahjSxDGvJARr2QNOlgxTW2hphPPKMbU3DnxpX6yWSGwDNCQ5mqzKAkyWOhAvfe8dkIV0sH_8SadtWgn2Yi3eyuiYj3PhFNhxbjEqCbna6AZuplTuH4XNu4yYv4Xdsc_YHtD5dnIBQc0jXYv3Qvp7ofcRyTWOHOwpZBjPScpjOEu-ilne3fiOFDmQNlga5FFj_jg--7lQler9LOEOuWyjusMF7nM-rdMKdxCahgdgvNEuEwmKpRO6sGNPVstktRWnnF5aPT-AQSyGe2JknAGl-GypT5sgpF3BCZvkDmCtXyTuLwMQrBXRzRW1wAFwnVMbjfeaNPfipRxB8nXZ3GKHsr=s256-no?authuser=0"
                alt="instagram logo">
            </a>
            <a class="hover:scale-110 transition-transform" href="https://www.whatsapp.com" title="Whatsapp">
                <img class="h-12" src="https://lh3.googleusercontent.com/v_fFctSo-MnffhT4pZ8SqR8kzqG9Tbet8fHgw6Cy31BpAaqMKkdMz85pyp8fD7NB64vZwNiMBn5oZuNNNODN56sU-SA49awc1HMKB301miO1GnMzglmUxhQq5eegR19ZJlq8WaEifAy7-FoO-ump6lhwTDqfaTwQYZgCy7skWxj9ShZVoRMNQaZRnFxudOFAult2D_XwXCdrDARIg0GDCbVST8VKFYM7zVDOFAIb9G9ZxYaipeRgvfk3aWScuAr6D5oR6x0QzjKnKasdw2ePbNlqqSFiyauVW_rMxG6be8c184JQxt0KP4o1CskSMh5SiONlZN1FCBocFzcFiCgnElJj6SCaB5ogFjIPAKJfhCbYV1TFVqAJhuc-wpX-0o3cKjZeEaj7wFg5icq4ZMjwaaZosa111sBeGCnc43bK_uJfsHs-q7L6sUoJi7g-kSzeSS24Ve4-ueFFbNq0OuhdhfVWlrZ8qWvNL6hAy1gmMkTC2ZCRNqaJS_r_XP551sWRNFTpExq9zYbqiXBji0YVNAW9_J-4qzmy09nU9xb1NYypCygojEbU5QRwFxQAr9r8quPSUWh-OCsVYIIZNPcttvg42dYtHY-CEcxIkguCbDfbIqxIKAM_KrU7DpsvpCKOlfJOTeIsYPinkbiOZGszMAc9TZpjC1biNBmgBXw9Td63PQsJ1vpnXHgah9K7j7dUtz4piSpIOebFZ61GLSpatGbg_8SGn6u1NL192E3gvjwDL3GOqZPRvCIb-md2=s256-no?authuser=0"
                alt="whatsapp logo">
            </a>

        </div>
        <div class="flex  mt-10">
            <input type="email" placeholder="Email" class="pl-6">
            <button class="w-28 px-2 bg-orange-400 text-white text-center flex justify-center items-center ">S'abonner</button>
        </div>
    </footer>
  `;
};

export default Footer;
